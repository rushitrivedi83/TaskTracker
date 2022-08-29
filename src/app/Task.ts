export interface Task {
	_id?: string;
	text: string;
	user_id: string | null;
	day: string;
	reminder: boolean;
  }