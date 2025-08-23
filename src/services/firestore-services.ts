import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from './firebase'

// TypeScript interfaces for type safety
export interface Experience {
	id: string
	role: string
	company: string
	period: string
	details: string
	skills: string[]
	order: number
}

export interface Project {
	id: string
	title: string
	description: string
	technologies: string[]
	githubUrl: string
	liveUrl: string
	imageUrl: string
}

export interface Education {
	id: string
	qualification: string
	institution: string
	period: string
	description: string
	skills: string[]
	order: number
}

// Fetch all experience documents from Firestore
export const getAllExperiences = async (): Promise<Experience[]> => {
	try {
		// Create reference to the 'experiences' collection
		const collectionRef = collection(db, 'experiences')
		const q = query(collectionRef, orderBy('order', 'asc'))
		// Fetch all documents in the collection
		const querySnapshot = await getDocs(q)

		// Transform documents into JavaScript objects with id and data
		return querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		})) as Experience[]
	} catch (error) {
		console.error('Error fetching experiences:', error)
		return []
	}
}

// Fetch all project documents from Firestore
export const getAllProjects = async (): Promise<Project[]> => {
	try {
		const collectionRef = collection(db, 'projects')
		const querySnapshot = await getDocs(collectionRef)

		return querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		})) as Project[]
	} catch (error) {
		console.error('Error fetching projects:', error)
		return []
	}
}

// Fetch all education documents from Firestore, ordered by order field
export const getAllEducation = async (): Promise<Education[]> => {
	try {
		const collectionRef = collection(db, 'education')
		// Create query with ordering by 'order' field in ascending order
		const q = query(collectionRef, orderBy('order', 'asc'))
		const querySnapshot = await getDocs(q)

		return querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		})) as Education[]
	} catch (error) {
		console.error('Error fetching education:', error)
		return []
	}
}
