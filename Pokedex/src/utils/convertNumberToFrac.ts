
export const convertNumberToFrac = (num: number): string => {
    switch (num) {
        case 0.5:
            return "1/2"
        
        case 0.25:
            return "1/4"

        case 0.125:
            return "1/8"
    
        default:
            return String(num);
    }
}