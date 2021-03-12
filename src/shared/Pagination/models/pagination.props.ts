export interface IPaginationProps {
  paginationCount: number
  type: string
  activeNum: number
  setActiveNum(num: number): void
  actionRequest(num: number): void
}
