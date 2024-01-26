import api from "./axios";

export interface EventData {
  id: number;
  title: string;
  description: string;
  time: string;
  date: Date;
}

export const getByMonthAndYear = async (year: number, month: number) => {
  try {
    const response = await api.get(`/byMonthAndYear/${year}/${month}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getEventsByDate = async (date: Date): Promise<EventData[]> => {
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());

  try {
    const response = await api.get(
      `/byDate/${date.toISOString().substring(0, 10)}`
    );
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
