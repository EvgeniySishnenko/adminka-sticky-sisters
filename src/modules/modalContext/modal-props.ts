export interface IModalProps {
  open: boolean
  setOpen?(boolean: boolean): void
  data?: {
    id: string | number | undefined
    modal: string | undefined
  }
  setData?(data: any): void //todo any
}
