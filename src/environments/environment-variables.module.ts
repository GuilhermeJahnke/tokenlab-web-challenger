import { NgModule } from "@angular/core";
import { ENV } from "./environment-variables.token";
// import { devVariables } from "./development";
import { environment } from "./environment";
// import { testVariables } from "./testing";

declare const process: any; // Typescript compiler will complain without this

export function environmentFactory() {
	const NODE_ENV = !(typeof process.env.NODE_ENV === "undefined") ? process.env.NODE_ENV : "dev";

	let vars;

	// switch (NODE_ENV) {
	// 	case "prod":
	// 		vars = prodVariables
	// 		break;
	// 	case "testing":
	// 		vars = testVariables
	// 		break;
	// 	default:
	// 		vars = devVariables
	// 		break;
	// }

	return vars = environment;
}

@NgModule({
	providers: [
		{
			provide: ENV,
			// useFactory instead of useValue so we cangit pulleasily add more logic as needed.
			useFactory: environmentFactory
		}
	]
})
export class EnvironmentsModule {}
