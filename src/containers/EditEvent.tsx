import { useForm } from "react-hook-form";
import { schema } from "../services/yup-validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";

import {
  CalendarContext,
  CalendarContextProps,
} from "../context/CalendarContextProvider";
import { editEventDetails, getEventById } from "../services/event-service";
import EventForm from "../components/EventForm";

interface FormData {
  title: string;
  description: string;
  time: string;
}

const EditEvent = () => {
  const { setOpenEditEventModal, year, monthNumber, day, eventId } = useContext(
    CalendarContext
  ) as CalendarContextProps;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const date = new Date(Date.UTC(year, monthNumber, day));
    const eventData = { ...data, date, id: null };

    if (eventId) {
      await editEventDetails(eventId, eventData)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    }

    setOpenEditEventModal(false);
  };

  useEffect(() => {
    if (eventId) {
      const getEvent = async () => {
        await getEventById(eventId)
          .then((res) => {
            setValue("title", res.title);
            setValue("description", res.description);
            setValue("time", res.time);
          })
          .catch((e) => console.log(e));
      };

      getEvent();
    }
  }, []);

  return (
    <div>
      <EventForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default EditEvent;
