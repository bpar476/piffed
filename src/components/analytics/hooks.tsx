import { useEffect } from 'react'
import { PageViewAnalyticsEventChannel } from './analytics'
import { pageView } from './events'

const pageViewAnalyticsFacade = new PageViewAnalyticsEventChannel()

export const usePageViewEvent = (pageId: string): void => {
  useEffect(() => {
    pageViewAnalyticsFacade.sendEvent(pageView(pageId))
  }, [])
}
