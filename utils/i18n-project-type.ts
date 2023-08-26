const projectTypeMessages = defineMessages({
  datapack: {
    id: 'project-type.datapack',
    defaultMessage: 'Data Pack',
  },
  datapacks: {
    id: 'project-type.datapacks',
    defaultMessage: 'Data Packs',
  },
  mod: {
    id: 'project-type.mod',
    defaultMessage: 'Mod',
  },
  mods: {
    id: 'project-type.mods',
    defaultMessage: 'Mods',
  },
  modpack: {
    id: 'project-type.modpack',
    defaultMessage: 'Modpack',
  },
  modpacks: {
    id: 'project-type.modpacks',
    defaultMessage: 'Modpacks',
  },
  plugin: {
    id: 'project-type.plugin',
    defaultMessage: 'Plugin',
  },
  plugins: {
    id: 'project-type.plugins',
    defaultMessage: 'Plugins',
  },
  resourcepack: {
    id: 'project-type.resourcepack',
    defaultMessage: 'Resource Pack',
  },
  resourcepacks: {
    id: 'project-type.resourcepacks',
    defaultMessage: 'Resource Packs',
  },
  shader: {
    id: 'project-type.shader',
    defaultMessage: 'Shader',
  },
  shaders: {
    id: 'project-type.shaders',
    defaultMessage: 'Shaders',
  },
})

type ExtractSingulars<K extends string> = K extends `${infer T}s` ? T : never

type ProjectType = ExtractSingulars<keyof typeof projectTypeMessages>

export function getProjectTypeMessage(type: ProjectType, plural = false) {
  return projectTypeMessages[`${type}${plural ? 's' : ''}`]
}
