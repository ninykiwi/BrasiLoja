// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = HomeDocument;

/**
 * Item in *Hero → Default → Primary → Carousel*
 */
export interface HeroSliceDefaultPrimaryCarouselItem {
  /**
   * Banner Title field in *Hero → Default → Primary → Carousel*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.carousel[].banner_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  banner_title: prismic.KeyTextField;

  /**
   * Banner Subtitle field in *Hero → Default → Primary → Carousel*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Optional
   * - **API ID Path**: hero.default.primary.carousel[].banner_subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  banner_subtitle: prismic.KeyTextField;

  /**
   * Banner Image field in *Hero → Default → Primary → Carousel*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.carousel[].banner_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner_image: prismic.ImageField<never>;

  /**
   * Link to Product field in *Hero → Default → Primary → Carousel*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Optional
   * - **API ID Path**: hero.default.primary.carousel[].link_to_product
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_to_product: prismic.LinkField;

  /**
   * Banner Type field in *Hero → Default → Primary → Carousel*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Type 1 (image to the right)
   * - **API ID Path**: hero.default.primary.carousel[].banner_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  banner_type: prismic.SelectField<
    "Type 1 (image to the right)" | "Type 2 (image to the left)",
    "filled"
  >;
}

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Carousel field in *Hero → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.carousel[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  carousel: prismic.GroupField<Simplify<HeroSliceDefaultPrimaryCarouselItem>>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimaryCarouselItem,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
    };
  }
}