<template>
  <div>
    <ChartDisplay :projects="projects ?? undefined" :personal="true" />
  </div>
</template>

<script setup>
import ChartDisplay from '~/components/ui/charts/ChartDisplay.vue'

const { formatMessage } = useVIntl()

const messages = defineMessages({
  title: {
    id: 'dashboard.analytics.title',
    defaultMessage: 'Analytics',
  },
})

definePageMeta({
  middleware: 'auth',
})

useHead({
  title: () => `${formatMessage(messages.title)} - Modrinth`,
})

const auth = await useAuth()
const id = auth.value?.user?.id

const { data: projects } = await useAsyncData(`user/${id}/projects`, () =>
  useBaseFetch(`user/${id}/projects`)
)
</script>
