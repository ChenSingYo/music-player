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

  // 單元測試會按照不同測試引入同一隻component，避免測試之間彼此干擾
  test("renders song.docID in id attribute ", () => {
    const song = {
      docID: "abc",
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

    // test: :id="`song-id-${song.docID}`"
    // expect(wrapper.attributes().id).toBe(`song-id-${song.docID}`);

    // test: :class="`song-id-${song.docID}`"
    expect(wrapper.classes()).toContain(`song-id-${song.docID}`)
  });
});
