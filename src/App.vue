<template>
  <div id="app">
    <NavBar :links="links" />
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold leading-tight text-gray-900">
          Dashboard
        </h2>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <section>
            <div class="section">
              <div class="section-title">
                <label for="id_username">Username</label>
              </div>
              <div class="w-full">
                <Input name="username" />
              </div>
            </div>
            <div class="section">
              <div class="section-title">
                <label for="id_about">About</label>
              </div>
              <div class="w-full">
                <Textarea name="about" />
              </div>
            </div>
            <div class="section">
              <div class="section-title">
                <label for="id_about">Photo</label>
              </div>
              <div class="w-full">
                <Input name="photo" type="file" />
              </div>
            </div>
            <div class="section">
              <div class="section-title">
                <label for="id_about">Cover Photo</label>
              </div>
              <div class="w-full">
                <Input name="cover" type="file" />
              </div>
            </div>
          </section>
          <section>
            <div class="section">
              <div class="section-title">
                <label for="id_firstname">First name</label>
              </div>
              <div class="w-full">
                <Input name="firstname" />
              </div>
            </div>
            <div class="section">
              <div class="section-title">
                <label for="id_lastname">Last name</label>
              </div>
              <div class="w-full">
                <Input name="lastname" />
              </div>
            </div>
            <div class="section">
              <div class="section-title">
                <label for="id_email">Email address</label>
              </div>
              <div class="w-full">
                <Input name="email" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Input from "@/components/Widgets/Input";
import Textarea from "@/components/Widgets/Textarea";

export default {
  name: "App",
  components: { NavBar, Input, Textarea },
  data() {
    return {
      links: [
        { text: "Dashboard", url: "#" },
        { text: "Team", url: "#" },
        { text: "Projects", url: "#" },
        { text: "Calendar", url: "#" },
        { text: "Reports", url: "#" },
      ],
    };
  },
};
</script>

<style lang="postcss">
.section {
  @apply py-4 flex;
}

.section-title {
  @apply w-1/3 flex flex-col justify-center;
  & label {
    @apply font-semibold;
  }
}
</style>
