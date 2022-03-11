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
    
    basicsBtn: By= By.xpath('(//a[@class="nav-a  "])[2]')
    amazonHomeBtn: By = By.xpath('//a[@class="nav-logo-link nav-progressive-attribute"]')
    ukraine: By = By.xpath('(//div[@class="a-section a-spacing-none a-padding-base a-text-center _top-banner-text-link_desktopStyle_top-banner__1bo6o top-banner-text-link"])')



    flagBtn: By = By.xpath('//span[@class="icp-nav-flag icp-nav-flag-us"]')
    espanolBtn: By = By.xpath('(//i[@class="a-icon a-icon-radio"])[2]')
    saveChangesBtn: By = By.xpath('//input[@class="a-button-input"]')
    espanolResponse: By = By.xpath('(//span[@class="nav-line-2"])[3]')




    constructor() {
        super({url: 'https://www.amazon.com/ref=nav_logo'})
    }
}
