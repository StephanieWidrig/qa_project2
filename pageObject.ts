import { By, WebDriver } from "selenium-webdriver"; 
import {BasePage} from "./basePage" 

export class amazonPage extends BasePage {
    driver: WebDriver
    url: string

    searchBarInput: By = By.xpath('//input[@id="twotabsearchtextbox"]')
    golfBallResults: By = By.xpath('(//span[@class="a-size-medium a-color-base a-text-normal"])[1]')
    addToCartBtn: By = By.xpath('//input[@id="add-to-cart-button"]')
    magnifyingBtn: By = By.xpath('//input[@id="nav-search-submit-button"]')
    addToCartResults: By = By.xpath('(//span[@class="a-size-medium-plus a-color-base sw-atc-text a-text-bold"])')
    

    accountsAndListBtn: By = By.xpath ('(//span[@class="nav-line-2"]) [4]')
    yourListBtn: By = By.xpath ('(//h2[@class="a-spacing-none ya-card__heading--rich a-text-normal"])[10]') 
    createListBtn: By = By.xpath('//input[@class="a-button-input"] ')
    listNameInput: By = By.xpath('(//input[@type="text"])[3]')
    createList2Btn: By= By.xpath('(//input[@class="a-button-input a-declarative"])[3]')


    flagBtn: By = By.xpath('//span[@class="icp-nav-flag icp-nav-flag-us"]')
    espanolBtn: By = By.xpath('(//i[@class="a-icon a-icon-radio"])[2]')
    saveChangesBtn: By = By.xpath('//input[@class="a-button-input"]')
    espanolResponse: By = By.xpath('(//span[@class="nav-line-2"])[3]')




    constructor() {
        super({url: 'https://www.amazon.com/ref=nav_logo'})
    }
}
