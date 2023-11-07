import { useQuery } from "react-query";
import { apiClient } from "./apiClient";
import {
  TOTAL_EARNINGS,
  TODAY_EARNINGS,
  TOTAL_RIDERS,
  TOTAL_TRIPS,
  TOTAL_DRIVERS,
  TODAY_RIDERS,
  TODAY_TRIPS,
  TODAY_DRIVERS,
  SMS_BALANCE,
  RECENT_TRIPS,
  SALES_GRAPH,
} from "../routes/constant";

export function useTotalEarnings() {
  const fetchTotalEarnings = async () => {
    const result = await apiClient.get(`${TOTAL_EARNINGS}`);
    return result.totalEarnings;
  };

  return useQuery("TotalEarnings", fetchTotalEarnings);
}

export function useTodayEarnings() {
  const fetchTodayEarnings = async () => {
    const result = await apiClient.get(`${TODAY_EARNINGS}`);
    return result.totalEarnings;
  };

  return useQuery("TodayEarnings", fetchTodayEarnings);
}

export function useTotalRiders() {
  const fetchTotalRiders = async () => {
    const result = await apiClient.get(`${TOTAL_RIDERS}`);
    return result.totalRiders;
  };

  return useQuery("TotalRiders", fetchTotalRiders);
}

export function useTotalTrips() {
  const fetchTotalTrips = async () => {
    const result = await apiClient.get(`${TOTAL_TRIPS}`);
    return result.totalTrips;
  };

  return useQuery("TotalTrips", fetchTotalTrips);
}

export function useTotalDrivers() {
  const fetchTotalDrivers = async () => {
    const result = await apiClient.get(`${TOTAL_DRIVERS}`);
    return result.totalDrivers;
  };

  return useQuery("TotalDrivers", fetchTotalDrivers);
}

export function useTodayRiders() {
  const fetchTodayRiders = async () => {
    const result = await apiClient.get(`${TODAY_RIDERS}`);
    return result.totalRiders;
  };

  return useQuery("TodayRiders", fetchTodayRiders);
}

export function useTodayTrips() {
  const fetchTodayTrips = async () => {
    const result = await apiClient.get(`${TODAY_TRIPS}`);
    return result.totalTrips;
  };

  return useQuery("TodayTrips", fetchTodayTrips);
}

export function useTodayDrivers() {
  const fetchTodayDrivers = async () => {
    const result = await apiClient.get(`${TODAY_DRIVERS}`);
    return result.totalDrivers;
  };

  return useQuery("TodayDrivers", fetchTodayDrivers);
}

export function useSmsBalance() {
  const fetchSmsBalance = async () => {
    const result = await apiClient.get(`${SMS_BALANCE}`);
    return result.balance;
  };

  return useQuery("SmsBalance", fetchSmsBalance);
}

export function useRecentTrips() {
  const fetchRecentTrips = async () => {
    const result = await apiClient.get(`${RECENT_TRIPS}`);
    return result.data.data;
  };

  return useQuery("RecentTrips", fetchRecentTrips);
}

export function useSalesGraph() {
  const fetchSalesGraph = async () => {
    const result = await apiClient.get(`${SALES_GRAPH}`);
    return result.data.monthlySum;
  };

  return useQuery("SalesGraph", fetchSalesGraph);
}
