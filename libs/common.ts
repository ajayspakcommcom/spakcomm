
export enum CLIENTS {
    BSV = 'bsv',
    BI = 'bi',
    AVC = 'avc'
}

export enum ProjectCategory {
    Pharma = 'pharma',
    Hotel = 'hotel',
    Agency = 'agency'
}

export enum ProjectSubCategory {
    LBL = 'leave behind leaflet',
    FLYER = 'flyer',
    BROCHURE = 'brochure',
    LETTER = 'letter',
    POSTER = 'poster',
    THANK_YOU_LETTER = 'thank you letter',
    THANK_YOU_CARD = 'thank you card',
    STALL = 'stall',
    STANDEE = 'standee',
    FOLDER = 'folder',
    CERTIFICATE = 'certificate',
    OTHER = 'other',
    ASSURED_CARD = 'assured card',
    TENT_CARD = 'tent card',
    COASTER = 'coaster',
    VA = 'visual aid'
}

export function logEnumValues(enumObject: any) {
    for (const [key, value] of Object.entries(enumObject)) {
        console.log(`${key}: ${value}`);
    }
}

export function getEnumProperty(enumObject: any): { key: string; value: string }[] {
    const enumProperties: { key: string; value: string }[] = [];
    for (const [key, value] of Object.entries(enumObject)) {
        enumProperties.push({ key, value: String(value) });
    }
    return enumProperties;
}