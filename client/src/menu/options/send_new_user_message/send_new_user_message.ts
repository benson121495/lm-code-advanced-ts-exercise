import { sendAddUserMessage } from "../../../api/send_add_user_message";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function sendNewUserMessage() {
	clear("yes");

	const id = await prompt("Please enter User ID");
	const name = await prompt("Please enter User name");

	printNewLine();
	print(`📨 Sending message "${id}"... & ${name}`);

	const success = await sendAddUserMessage(id, name);

	if (success === true) print("🥳 New User ADD successfully!");
	else print("😵 Cannot Add New USer.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}
