import { inject, provide, ref, type InjectionKey, type Ref } from 'vue'

export type ViewMode = 'architect' | 'operator'

const key: InjectionKey<Ref<ViewMode>> = Symbol('viewMode')

export function provideViewMode(): Ref<ViewMode> {
  const mode = ref<ViewMode>('architect')
  provide(key, mode)
  return mode
}

export function useViewMode(): Ref<ViewMode> {
  const injected = inject(key)
  if (!injected) {
    throw new Error('useViewMode() requires provideViewMode() on an ancestor')
  }
  return injected
}
