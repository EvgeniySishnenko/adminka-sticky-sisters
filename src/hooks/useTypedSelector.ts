import { TypedUseSelectorHook, useSelector } from "react-redux"
import { RootState } from "@root/store/reducers"
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
