export interface ConfigItem {
  appHost: string
  apiHost: string
  coreURL?: string
}

export interface Config extends ConfigItem {
  coreURL: string
}
