<template>
  <v-card class="d-inline-block mx-auto">
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-img
            :src="url"
            height="200"
            width="200"
          />
        </v-col>

        <v-col
          class="text-center pl-0"
          cols="auto"
        >
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
            <v-col class="px-0">
              <v-btn
                icon
                @click="$emit('heart')"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-col>

            <v-col class="px-0">
              <v-btn
                icon
                @click="$emit('copy')"
              >
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </v-col>

            <v-col class="px-0">
              <v-btn
                icon
                @click="$emit('delete')"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },

    id: {
      type: Number,
      required: true,
    },
  },
}
</script>
