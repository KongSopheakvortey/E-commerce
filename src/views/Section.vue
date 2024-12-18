<template>
    <div class="sectionContent">
        This is Section {{ id }} of Page {{ nb }}
    </div>
</template>

<script>
export default {

  computed: {
    nb() {
      return this.$route.params.nb;
    },
    id() {
        return this.$route.params.id;
    }
  }
};
</script>

<style>
.sectionContent{
    border-top: 3px dashed black;
    padding: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>