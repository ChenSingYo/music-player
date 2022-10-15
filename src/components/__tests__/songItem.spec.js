import SongItem from "@/components/SongItem.vue";
import { RouterLinkStub, shallowMount } from "@vue/test-utils";

describe("SongItem.vue", () => {
  test("renders song.display_name", () => {
    const song = {
      display_name: "test",
    };
    const wrapper = shallowMount(SongItem, {
      props: {
        song,
      },
      global: {
        components: {
          "router-link": RouterLinkStub, //stubbing components
        },
      },
    });

    // expect(wrapper.text()).toContain(song.display_name);

    const compositionAuthor = wrapper.find(".text-gray-500");
    expect(compositionAuthor.text()).toStrictEqual(song.display_name);
  });
});
