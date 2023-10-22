// calling createStore form default redux
import {createStore} from "redux";
import reducer from "./action";


export const store = createStore(reducer)
