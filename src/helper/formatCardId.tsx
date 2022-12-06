export const formatCardId = (id: number) => {
    let numConcat = "000"
    let number = (numConcat + id).slice(-3)
    return id <= 999 ? `# ${number}` : `# ${id}`
}