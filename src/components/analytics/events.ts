import { AnalyticsEvent } from './analytics'

export class PageViewEvent implements AnalyticsEvent {
  action = 'view'
  category = 'page'
  page: string

  constructor(pageName: string) {
    this.page = pageName
  }

  toEvent(): AnalyticsEvent {
    const { action, category, page } = this
    return {
      action,
      category,
      label: page,
    }
  }
}

export const pageView = (pageIdentifier: string): PageViewEvent => new PageViewEvent(pageIdentifier)

export class CardClickEvent implements AnalyticsEvent {
  category = 'card'
  action = 'click'
  card: string

  constructor(cardTitle: string) {
    this.card = cardTitle
  }

  toEvent(): AnalyticsEvent {
    const { action, category, card } = this
    return {
      action,
      category,
      label: card,
    }
  }
}

export const cardClick = (cardTitle: string): CardClickEvent => new CardClickEvent(cardTitle)
