import { supabase } from './supabase.js'

// Get all venues
async function getVenues() {
  const { data, error } = await supabase
    .from('venues')
    .select('*')
    .eq('active', true)
    .eq('approved', true)
  
  if (error) {
    console.log('Error fetching venues:', error)
    return []
  }
  
  return data
}

// Get all banks for a venue
async function getBanks(venueId) {
  const { data, error } = await supabase
    .from('banks')
    .select('*')
    .eq('venue_id', venueId)
    .eq('active', true)
  
  if (error) {
    console.log('Error fetching banks:', error)
    return []
  }
  
  return data
}

// Get latest progressive for a bank
async function getProgressive(bankId) {
  const { data, error } = await supabase
    .from('progressives')
    .select('*')
    .eq('bank_id', bankId)
    .eq('approved', true)
    .order('created_at', { ascending: false })
    .limit(1)
  
  if (error) {
    console.log('Error fetching progressive:', error)
    return null
  }
  
  return data[0]
}

export { getVenues, getBanks, getProgressive }
