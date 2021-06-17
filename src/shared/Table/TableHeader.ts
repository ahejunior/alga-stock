export interface TableHeader {    
    key: string
    value: string
    right?: boolean
    center?: boolean
}
  
  const HeadersArr: TableHeader[] = [
    { key: 'id', value: '#', center: true },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price', right: true },
    { key: 'stock', value: 'Available Stock', right: true }
  ]
  
  export default HeadersArr