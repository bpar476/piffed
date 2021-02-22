import { PageViewEvent, CardClickEvent } from './events'

export interface AnalyticsEvent {
  category: string
  action: string
  label?: string
  value?: number
}

type AnalyticsPayload = {
  event_category: string
  event_label?: string
  value?: number
}

const buildPayload = (event: AnalyticsEvent): AnalyticsPayload => {
  const { category, label, value } = event

  let payload: AnalyticsPayload = {
    event_category: category,
  }
  if (label) {
    payload = {
      event_label: label,
      ...payload,
    }
  }
  if (value) {
    payload = {
      value,
      ...payload,
    }
  }
  return payload
}

export interface AnalyticsEventChannel<T extends AnalyticsEvent> {
  sendEvent(event: T): void
}

export class PageViewAnalyticsEventChannel implements AnalyticsEventChannel<PageViewEvent> {
  public sendEvent(event: PageViewEvent): void {
    console.log(`Sending event for page: ${event.page}`)
    window.gtag('event', event.action, buildPayload(event.toEvent()))
  }
}

export class CardClickAnalyticsEventChannel implements AnalyticsEventChannel<CardClickEvent> {
  public sendEvent(event: CardClickEvent): void {
    console.log(`Sending event for card: ${event.card}`)
    window.gtag('event', event.action, buildPayload(event.toEvent()))
  }
}
