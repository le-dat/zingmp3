import { useLayoutEffect } from "react"

const useDocumentTitle = (title: string = "Zing MP3"): void => {
  useLayoutEffect(() => {
    document.title = title
  }, [title])
}

export default useDocumentTitle
