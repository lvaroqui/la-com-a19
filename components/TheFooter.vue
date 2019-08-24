<template>
  <footer class="center-text">
    <div class="element">© Tous droits reservés - La Comédie Musicale 2019</div>
    <div class="element">
      Graphismes :
      <a href="https://www.linkedin.com/in/ramijerbaka/">Rami Jerbaka</a> &amp;
      Emma Bidault
    </div>
    <div class="element">
      &lt;/&gt; par
      <a href="https://www.linkedin.com/in/luc-varoqui-897689125/"
        >Luc Varoqui</a
      >
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  background-color: darken($dark-grey-color, 5);
  width: 100%;
  padding: 1em;
  scroll-snap-align: end;
}

.element {
  padding: 0.2em 0;
}

a {
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
}
</style>
