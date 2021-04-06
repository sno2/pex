[@sno2/pex](../README.md) / [Modules](../modules.md) / types

# Module: types

## Table of contents

### Interfaces

- [PaginatedOpts](../interfaces/types.paginatedopts.md)
- [Photo](../interfaces/types.photo.md)
- [PhotoSource](../interfaces/types.photosource.md)
- [PhotosQuery](../interfaces/types.photosquery.md)
- [PopularVideosQuery](../interfaces/types.popularvideosquery.md)
- [Video](../interfaces/types.video.md)
- [VideoFile](../interfaces/types.videofile.md)
- [VideoPicture](../interfaces/types.videopicture.md)
- [VideoUser](../interfaces/types.videouser.md)
- [VideosQuery](../interfaces/types.videosquery.md)

### Type aliases

- [Locale](types.md#locale)
- [Orientation](types.md#orientation)
- [PaginatedData](types.md#paginateddata)
- [PhotoQuery](types.md#photoquery)
- [Quality](types.md#quality)
- [Size](types.md#size)
- [VideoQuery](types.md#videoquery)

## Type aliases

### Locale

Ƭ **Locale**: *en-US* \| *pt-BR* \| *es-ES* \| *ca-ES* \| *de-DE* \| *it-IT* \| *fr-FR* \| *sv-SE* \| *id-ID* \| *pl-PL* \| *ja-JP* \| *zh-TW* \| *zh-CN* \| *ko-KR* \| *th-TH* \| *nl-NL* \| *hu-HU* \| *vi-VN* \| *cs-CZ* \| *da-DK* \| *fi-FI* \| *uk-UA* \| *el-GR* \| *ro-RO* \| *nb-NO* \| *sk-SK* \| *tr-TR* \| *ru-RU*

Defined in: types/locale.ts:1

___

### Orientation

Ƭ **Orientation**: *landscape* \| *portrait* \| *square*

Defined in: types/orientation.ts:1

___

### PaginatedData

Ƭ **PaginatedData**<F\>: { `next_page`: *string* ; `page`: *number* ; `per_page`: *number* ; `total_results`: *number*  } & *Record*<F[*0*], F[*1*][]\>

#### Type parameters:

Name | Type |
:------ | :------ |
`F` | [*string*, *unknown*] |

Defined in: types/pagination.ts:6

___

### PhotoQuery

Ƭ **PhotoQuery**: *Pick*<[*Photo*](../interfaces/types.photo.md), *id*\>

Defined in: types/photo.ts:29

___

### Quality

Ƭ **Quality**: *sd* \| *hd* \| *hls*

Defined in: types/quality.ts:1

___

### Size

Ƭ **Size**: *small* \| *medium* \| *large*

Defined in: types/size.ts:1

___

### VideoQuery

Ƭ **VideoQuery**: *Pick*<[*Video*](../interfaces/types.video.md), *id*\>

Defined in: types/video.ts:38
