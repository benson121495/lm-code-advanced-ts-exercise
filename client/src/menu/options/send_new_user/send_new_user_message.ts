import { send_new_user_message } from "../../../api/send_add_user_message";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function sendNewUserMessage() {
	clear("yes");

	const message = await prompt("What message shall we add? ");

	printNewLine();
	print(`📨 Sending message "${message}"...`);

	const success = await send_new_user_message(message);

	if (success === true) print("🥳 New User ADD successfully!");
	else print("😵 Cannot Add New USer.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}
