export type SearchResponse = {
    kind: string
    totalItems: number
    items: Book[]
}

export type Book = {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfo
    saleInfo: SaleInfo
    accessInfo: AccessInfo
    searchInfo: {
        textSnippet: string
    }
}


type VolumeInfo = {
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

type IndustryIdentifier = {
    type: string
    identifier: string
}

type ReadingModes = {
    text: boolean
    image: boolean
}

type PanelizationSummary = {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
}

type ImageLinks = {
    smallThumbnail: string
    thumbnail: string
}

type SaleInfo = {
    country: string
    saleability: string
    isEbook: boolean,
    listPrice: Price
    retailPrice: Price
    buyLink: string
    offers: Offer[]
}

type Price = {
    amount: number
    currencyCode: string
}

type Offer = {
    finskyOfferType: number
    listPrice: Price
    retailPrice: Price
}

type AccessInfo = {
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

type AccessFormat = {
    isAvailable: boolean
    acsTokenLink: string
}