export function useTableOptions() {

  const handleEdit = (id: number) => {
    console.log('edit')
  }


  const handleRemove = (id: number) => {
    console.log('delete')
  }


  return {
    handleEdit,
    handleRemove
  }
}
