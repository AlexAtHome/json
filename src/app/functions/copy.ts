export const copy = async (text: string): Promise<void> => navigator.clipboard.writeText(text)

export default copy
