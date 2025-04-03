/*******************************************************

 Project name:             countdown
 Author:                   Julius Cinco Cesar
                           knznsmn@knznsmn.com
                           @knznsmn

 Date created:             April 03, 2025
                           09:33:28

*******************************************************/

// Function Hall
import { get_current_year } from "./modules/utils.js";
import {Clock} from "./modules/Clock.js";

// Anchors
const ans = document.getElementById('ans');
ans.innerText = get_current_year();

function main() {
  setInterval(Clock, 1000)
}

main()