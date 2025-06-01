// hooks/useSupabaseTable.ts
import { useState } from "react";
import { supabase } from "@/lib/supabase/supabase";

export function useSupabaseTable<T = any>(table: string) {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (filter?: (query: any) => any) => {
    setLoading(true);
    let query = supabase.from(table).select("*");

    if (filter) {
      query = filter(query);
    }

    const { data, error } = await query;
    setData(data);
    setError(error);
    setLoading(false);
    return { data, error };
  };

  const insertData = async (values: Partial<T>) => {
    const { data, error } = await supabase.from(table).insert(values).select();
    return { data, error };
  };

  const updateData = async (
    id: number | string,
    values: Partial<T>,
    idKey: string = "id"
  ) => {
    const { data, error } = await supabase
      .from(table)
      .update(values)
      .eq(idKey, id)
      .select();
    return { data, error };
  };

  const deleteData = async (id: number | string, idKey: string = "id") => {
    const { data, error } = await supabase.from(table).delete().eq(idKey, id);
    return { data, error };
  };

  return {
    data,
    error,
    loading,
    fetchData,
    insertData,
    updateData,
    deleteData,
  };
}
