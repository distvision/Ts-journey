function addNumbers(a: number,b:number): number {
  return a + b
}
export default addNumbers

export const addString = (str1: string, str2: string = ""): string => `${str1} ${str2}`

export const format = (title: string, params: string | number): string => `${title} ${params}`

export const printformat = (title: string, params: string | number): void => {
  console.log(format(title, params));
} 

export const fetchdata = (url: string): Promise<string> => Promise.resolve(`data from ${url}`)

function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`
}