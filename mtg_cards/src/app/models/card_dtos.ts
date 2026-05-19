import { BoosterCardType, Color, ColorIdentity, Layout, Legality, Rarity, SetType } from "../lib/card_enums";

export interface BlockLegality {
	format: string;
	legality: keyof typeof Legality;
}

export interface Card {
	name: string;
	manaCost: string;
	cmc: number;
	colors: (keyof typeof Color)[];
	colorIdentity: (keyof typeof ColorIdentity)[];
	type: string;
	supertypes: string[];
	types: string[];
	subtypes: string[];
	rarity: keyof typeof Rarity;
	set: string;
	setName: string;
	artist: string;
	flavor?: string;
	layout: keyof typeof Layout;
	multiverseid: number;
	imageUrl: string;
	variations: number[];
	printings: string[];
	originalText: string;
	originalType: string;
	legalities: BlockLegality[];
	id: string;
}
export interface CreatureCard {
	power: string;
	toughness: string;
}
export interface PlaneswalkerCard {
	loyalty: number;
}

export interface CardFilter {
	name?: string;
	layout?: string;
	cmc?: number;
	colors?: string;
	colorIdentity?: string;
	type?: string;
	supertypes?: string;
	types?: string;
	subtypes?: string;
	rarity?: string;
	set?: string;
	setName?: string;
	text?: string;
	flavor?: string;
	artist?: string;
	number?: string;
	power?: string;
	toughness?: string;
	loyalty?: number;
	foreignName?: string;
	language?: string;
	gameFormat?: string;
	legality?: keyof typeof Legality;
	page?: number;
	pageSize?: number;
	orderBy?: string;
	random?: boolean;
	contains?: string;
}

export interface PaginationFilter {
	page?: number;
	pageSize?: number;
}

export interface SetFilter {
	name?: string;
	block?: string;
}

export type Booster = (keyof typeof BoosterCardType | (keyof typeof BoosterCardType)[])[];

export interface Set {
	name: string;
	block?: string;
	code: string;
	gathererCode?: string;
	type?: string;
	oldCode?: string;
	magicCardsInfoCode?: string;
	releaseDate: string;
	border: "white" | "black" | "silver";
	expansion: keyof typeof SetType;
	onlineOnly?: true;
	booster?: Booster;
}