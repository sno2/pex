[@sno2/pex](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / Pex

# Class: Pex

[index](../modules/index.md).Pex

The main class used to utilize the Pexels API.

## Example

```ts
const pex = new Pex({ key: "YOUR_API_KEY" });
const photo = await pex.getPhoto({ id: "" });
```

## Table of contents

### Constructors

- [constructor](index.pex.md#constructor)

### Properties

- [#axios](index.pex.md##axios)
- [#opts](index.pex.md##opts)

### Methods

- [getCuratedPhotos](index.pex.md#getcuratedphotos)
- [getPhoto](index.pex.md#getphoto)
- [getPhotos](index.pex.md#getphotos)
- [getPopularVideos](index.pex.md#getpopularvideos)
- [getVideo](index.pex.md#getvideo)
- [getVideos](index.pex.md#getvideos)

## Constructors

### constructor

\+ **new Pex**(`opts`: [*PexOpts*](../interfaces/index.pexopts.md)): [*Pex*](index.pex.md)

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`opts` | [*PexOpts*](../interfaces/index.pexopts.md) | The options that includes your Pexels API key.    |

**Returns:** [*Pex*](index.pex.md)

Defined in: index.ts:31

## Properties

### #axios

• `Private` **#axios**: AxiosInstance

Defined in: index.ts:31

___

### #opts

• `Private` **#opts**: [*PexOpts*](../interfaces/index.pexopts.md)

Defined in: index.ts:30

## Methods

### getCuratedPhotos

▸ **getCuratedPhotos**(`paginatedOpts`: [*PaginatedOpts*](../interfaces/types.paginatedopts.md)): *Promise*<[*PaginatedData*](../modules/types.md#paginateddata)<[*photos*, [*Photo*](../interfaces/types.photo.md)]\>\>

Gets the curated photos from the Pexels API.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`paginatedOpts` | [*PaginatedOpts*](../interfaces/types.paginatedopts.md) | The options to specify the behavior of the paginated response (limit per page, ect.).   |

**Returns:** *Promise*<[*PaginatedData*](../modules/types.md#paginateddata)<[*photos*, [*Photo*](../interfaces/types.photo.md)]\>\>

The paginated, curated photos.

Defined in: index.ts:78

___

### getPhoto

▸ **getPhoto**(`queryOpts`: [*PhotoQuery*](../modules/types.md#photoquery)): *Promise*<[*photos*, [*Photo*](../interfaces/types.photo.md)]\>

Gets a single photo object.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`queryOpts` | [*PhotoQuery*](../modules/types.md#photoquery) | An object that includes the `id` of the specified photo and some other options.   |

**Returns:** *Promise*<[*photos*, [*Photo*](../interfaces/types.photo.md)]\>

The queried photo.

Defined in: index.ts:51

___

### getPhotos

▸ **getPhotos**(`queryOpts`: [*PhotosQuery*](../interfaces/types.photosquery.md) & [*PaginatedOpts*](../interfaces/types.paginatedopts.md)): *Promise*<[*PaginatedData*](../modules/types.md#paginateddata)<[*photos*, [*Photo*](../interfaces/types.photo.md)]\>\>

Gets multiple photos based upon the search `query` specified in the `queryOpts` parameter and the other properties in `queryOpts`.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`queryOpts` | [*PhotosQuery*](../interfaces/types.photosquery.md) & [*PaginatedOpts*](../interfaces/types.paginatedopts.md) | The options used to search/filter/sort through the photos.   |

**Returns:** *Promise*<[*PaginatedData*](../modules/types.md#paginateddata)<[*photos*, [*Photo*](../interfaces/types.photo.md)]\>\>

The paginated photos response.

Defined in: index.ts:63

___

### getPopularVideos

▸ **getPopularVideos**(`queryOpts`: [*PopularVideosQuery*](../interfaces/types.popularvideosquery.md) & [*PaginatedOpts*](../interfaces/types.paginatedopts.md)): *Promise*<[*PaginatedData*](../modules/types.md#paginateddata)<[*videos*, [*Photo*](../interfaces/types.photo.md)]\>\>

Gets the popular videos based upon the query options.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`queryOpts` | [*PopularVideosQuery*](../interfaces/types.popularvideosquery.md) & [*PaginatedOpts*](../interfaces/types.paginatedopts.md) | The options used to query for videos.   |

**Returns:** *Promise*<[*PaginatedData*](../modules/types.md#paginateddata)<[*videos*, [*Photo*](../interfaces/types.photo.md)]\>\>

The paginated popular videos.

Defined in: index.ts:118

___

### getVideo

▸ **getVideo**(`queryOpts`: [*VideoQuery*](../modules/types.md#videoquery)): *Promise*<[*Video*](../interfaces/types.video.md)\>

Gets a given video based upon the `id` in the `queryOpts` parameter.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`queryOpts` | [*VideoQuery*](../modules/types.md#videoquery) | The options used to get the video data.   |

**Returns:** *Promise*<[*Video*](../interfaces/types.video.md)\>

The video object.

Defined in: index.ts:93

___

### getVideos

▸ **getVideos**(`queryOpts`: [*VideosQuery*](../interfaces/types.videosquery.md) & [*PaginatedOpts*](../interfaces/types.paginatedopts.md)): *Promise*<[*PaginatedData*](../modules/types.md#paginateddata)<[*videos*, [*Photo*](../interfaces/types.photo.md)]\>\>

Gets multiple videos based upon the query options.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`queryOpts` | [*VideosQuery*](../interfaces/types.videosquery.md) & [*PaginatedOpts*](../interfaces/types.paginatedopts.md) | The options used to query for videos.   |

**Returns:** *Promise*<[*PaginatedData*](../modules/types.md#paginateddata)<[*videos*, [*Photo*](../interfaces/types.photo.md)]\>\>

The paginated videos the match your query options.

Defined in: index.ts:103
