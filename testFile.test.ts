import { Builder, Capabilities } from "selenium-webdriver"

import {amazonPage} from "./pageObject"

const chromedriver= require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myTest = new amazonPage

