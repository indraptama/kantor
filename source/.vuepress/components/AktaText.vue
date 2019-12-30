<template>
  <div class="AktaText">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: [],
  mounted() {
    const TextP = this.$el.querySelectorAll("p");
    const TextList = this.$el.querySelectorAll("li");

    for (const Text of TextP) {
      const content = Text.innerHTML;
      const newContent = '<span class="AktaTextContent">' + content + "</span>";
      Text.innerHTML = newContent;
    }

    for (const Text of TextList) {
      const content = Text.innerHTML;
      const newContent = '<span class="AktaTextContent">' + content + "</span>";
      Text.innerHTML = newContent;
    }
  }
};
</script>



<style>
/* @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i'); */
/* @import url('https://fonts.googleapis.com/css?family=Courier+Prime&display=swap'); */
/* @import url("https://fonts.googleapis.com/css?family=Merriweather:400,700&display=swap"); */
/* @import url("https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap"); */
@import url("https://fonts.googleapis.com/css?family=Zilla+Slab:400,700&display=swap");
/* @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400,700&display=swap"); */

.AktaText {
  font-family: "Zilla Slab", "Courier Prime", "Courier New", Courier, monospace;
  /* font-size: 14px; */
  background-color: #f4f4f4;
  padding: 0.1rem 1.5rem;
  border-left: 0.5rem solid #aaa;
  margin-top: 1.5rem;
}

.AktaText p,
.AktaText li {
  /* background-image: url('/dashline-s.svg'); */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 49%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0) 52%
  );
  background-repeat: repeat;
  background-size: 8px 2em;
  background-position: 0 0;
  line-height: 2em;
}

@media (min-width: 1400px) {
  .AktaText {
    font-size: 18px;
  }
  .AktaText p,
  .AktaText li {
    background-size: 5px 2em;
  }
}

.AktaTextContent {
  background-color: #f4f4f4;
}
</style>
