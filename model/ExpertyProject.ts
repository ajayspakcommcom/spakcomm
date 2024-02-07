export default interface ExpertyProject {
    id: number;
    imagePath: string;
    text: string;
    detail: {
        title: string,
        subTitle: string,
        img: string,
        headingPara: string,
        service: string[],
        bottomPara: string
    }
}