import api from "./axios";

interface EventData {
  id: number;
  title: string;
  description: string;
  time: string;
  date: Date;
}

export const getEventsByDate = async (date: Date): Promise<EventData[]> => {
  try {
    const response = await api.get(`/bydate/${date}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEventById = async (id: number): Promise<EventData> => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addEvent = async (data: EventData): Promise<EventData> => {
  try {
    await api.post("/", data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const editEventDetails = async (
  id: number,
  data: EventData
): Promise<EventData> => {
  try {
    await api.patch(`/${id}`, data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = async (id: number): Promise<boolean> => {
  try {
    await api.delete(`/${id}`);
    return true;
  } catch (error) {
    throw error;
  }
};
