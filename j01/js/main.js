/*******************************************************

 Project name:             drum-kit
 Author:                   Julius Cinco Cesar
                           knznsmn@knznsmn.com
                           @knznsmn

 Date created:             March 23, 2025
                           21:23:29

*******************************************************/

// Function Hall
import { get_current_year } from "./modules/utils.js";

// Anchors
const ans = document.getElementById('ans');
ans.innerText = get_current_year();

const keys = [
  document.getElementsByClassName("key")[0],
  document.getElementsByClassName("key")[1],
  document.getElementsByClassName("key")[2],
  document.getElementsByClassName("key")[3],
  document.getElementsByClassName("key")[4],
  document.getElementsByClassName("key")[5],
  document.getElementsByClassName("key")[6],
  document.getElementsByClassName("key")[7],
  document.getElementsByClassName("key")[8],
]

console.log(keys.length);