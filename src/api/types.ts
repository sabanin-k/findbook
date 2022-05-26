export interface ISearchResponse {
    kind: string
    totalItems: number
    items: IBook[]
}

export interface IBook {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: IVolumeInfo
    saleInfo: SaleInfo
    accessInfo: AccessInfo
    searchInfo: {
        textSnippet: string
    }
}


interface IVolumeInfo {
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers: IndustryIdentifier[]
    readingModes: ReadingModes
    pageCount: number
    printType: string
    categories: string[]
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: PanelizationSummary
    imageLinks: ImageLinks
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
}

interface IndustryIdentifier {
    type: string
    identifier: string
}

interface ReadingModes {
    text: boolean
    image: boolean
}

interface PanelizationSummary {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
}

interface ImageLinks {
    smallThumbnail: string
    thumbnail: string
}

interface SaleInfo {
    country: string
    saleability: string
    isEbook: boolean,
    listPrice: Price
    retailPrice: Price
    buyLink: string
    offers: Offer[]
}

interface Price {
    amount: number
    currencyCode: string
}

interface Offer {
    finskyOfferType: number
    listPrice: Price
    retailPrice: Price
}

interface AccessInfo {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: AccessFormat
    pdf: AccessFormat
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
}

interface AccessFormat {
    isAvailable: boolean
    acsTokenLink: string
}
