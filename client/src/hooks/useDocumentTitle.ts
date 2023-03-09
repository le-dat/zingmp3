import { useLayoutEffect } from "react"

const useDocumentTitle = (title?: string) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title
    } else {
      document.title = "Zing MP3"
    }
  }, [title])
}

export default useDocumentTitle
