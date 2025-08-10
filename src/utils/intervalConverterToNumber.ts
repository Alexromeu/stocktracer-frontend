const converterToNumber = (entry: string) => {
    const regex = /(\d+)min/ 
    const amount = entry.match(regex)
    
    if (amount) return Number(amount[1]);
} 

export default converterToNumber;