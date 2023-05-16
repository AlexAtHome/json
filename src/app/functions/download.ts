export const download = (text: string) => {
	const blob = new Blob([text], { type: 'application/json' })
	const a = document.createElement('a')
	a.href = URL.createObjectURL(blob)
	a.download = `json-${Date.now()}.json`
	a.click()
}

export default download
