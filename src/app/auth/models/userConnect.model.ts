export interface UserConnect{
	login: string;
	password: string
}

export interface User {
	id: number
	nom: string
	prenom: string
	genre: string
	password: string
	login: string
	token: string
	userIdd: string
	tel: string
	email: string
	firstConnection: boolean
	roles: string[]
	image: string
	createdAt: number
	updatedAt: number
	createBy: number
	updateBy: number
	adresse: string
	dateNaiss: number
	lieuNaiss: string
	conventionCollective: string
	poste: string
	hierarchie: string
	connect: boolean
	etat: boolean
}